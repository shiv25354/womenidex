
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

const BmiCalculator = () => {
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [height, setHeight] = useState<string>('');
  const [heightInch, setHeightInch] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState<string>('');
  const [categoryColor, setCategoryColor] = useState<string>('');

  const calculateBmi = () => {
    let calculatedBmi: number | null = null;
    let h: number;
    let w: number;

    try {
      if (unit === 'metric') {
        h = parseFloat(height) / 100; // Convert cm to meters
        w = parseFloat(weight);
        
        if (isNaN(h) || isNaN(w) || h <= 0 || w <= 0) {
          toast.error("Please enter valid height and weight values");
          return;
        }
        
        calculatedBmi = w / (h * h);
      } else {
        const heightFt = parseFloat(height);
        const heightIn = parseFloat(heightInch);
        
        if (isNaN(heightFt) || isNaN(heightIn) || isNaN(parseFloat(weight)) || 
            heightFt <= 0 || parseFloat(weight) <= 0) {
          toast.error("Please enter valid height and weight values");
          return;
        }
        
        h = (heightFt * 12) + heightIn; // Convert to total inches
        w = parseFloat(weight);
        calculatedBmi = (w * 703) / (h * h);
      }

      setBmi(parseFloat(calculatedBmi.toFixed(1)));
      determineBmiCategory(calculatedBmi);
      
    } catch (error) {
      toast.error("An error occurred while calculating BMI");
      console.error(error);
    }
  };

  const determineBmiCategory = (calculatedBmi: number) => {
    if (calculatedBmi < 16) {
      setCategory('Severe Thinness');
      setCategoryColor('text-bmi-underweight');
    } else if (calculatedBmi < 17) {
      setCategory('Moderate Thinness');
      setCategoryColor('text-bmi-underweight');
    } else if (calculatedBmi < 18.5) {
      setCategory('Mild Thinness');
      setCategoryColor('text-bmi-underweight');
    } else if (calculatedBmi >= 18.5 && calculatedBmi < 25) {
      setCategory('Healthy Weight');
      setCategoryColor('text-bmi-normal');
    } else if (calculatedBmi >= 25 && calculatedBmi < 30) {
      setCategory('Overweight');
      setCategoryColor('text-bmi-overweight');
    } else if (calculatedBmi >= 30 && calculatedBmi < 35) {
      setCategory('Obesity Class I');
      setCategoryColor('text-bmi-obese');
    } else if (calculatedBmi >= 35 && calculatedBmi < 40) {
      setCategory('Obesity Class II');
      setCategoryColor('text-bmi-obese');
    } else if (calculatedBmi >= 40) {
      setCategory('Obesity Class III');
      setCategoryColor('text-bmi-obese');
    }
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    calculateBmi();
  };

  const handleReset = () => {
    setHeight('');
    setHeightInch('');
    setWeight('');
    setBmi(null);
    setCategory('');
  };

  return (
    <Card className="w-full max-w-2xl mx-auto border border-gray-200 shadow-md">
      <CardHeader className="bg-bmi-light-purple">
        <CardTitle className="text-2xl font-semibold text-center">BMI Calculator</CardTitle>
        <CardDescription className="text-center">
          Calculate your Body Mass Index based on your height and weight
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <form onSubmit={handleCalculate}>
          <div className="mb-6">
            <RadioGroup 
              value={unit} 
              onValueChange={(value) => setUnit(value as 'metric' | 'imperial')}
              className="flex space-x-8 justify-center"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="metric" id="metric" />
                <Label htmlFor="metric">Metric (cm, kg)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="imperial" id="imperial" />
                <Label htmlFor="imperial">Imperial (ft, lb)</Label>
              </div>
            </RadioGroup>
          </div>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="height" className="text-base">Height</Label>
              <div className="flex gap-2 mt-1.5">
                <div className="flex-1">
                  <Input
                    id="height"
                    type="number"
                    placeholder={unit === 'metric' ? 'Centimeters' : 'Feet'}
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="w-full"
                    step="any"
                    min="0"
                  />
                </div>
                {unit === 'imperial' && (
                  <div className="flex-1">
                    <Input
                      type="number"
                      placeholder="Inches"
                      value={heightInch}
                      onChange={(e) => setHeightInch(e.target.value)}
                      className="w-full"
                      step="any"
                      min="0"
                    />
                  </div>
                )}
              </div>
            </div>
            
            <div>
              <Label htmlFor="weight" className="text-base">Weight</Label>
              <div className="mt-1.5">
                <Input
                  id="weight"
                  type="number"
                  placeholder={unit === 'metric' ? 'Kilograms' : 'Pounds'}
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full"
                  step="any"
                  min="0"
                />
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <div className="flex gap-2 w-full">
          <Button 
            type="button"
            className="flex-1 bg-bmi-purple hover:bg-bmi-dark-purple"
            onClick={handleCalculate}
          >
            Calculate BMI
          </Button>
          <Button 
            type="button" 
            variant="outline" 
            className="flex-1"
            onClick={handleReset}
          >
            Reset
          </Button>
        </div>
        
        {bmi !== null && (
          <div className="w-full p-4 bg-gray-50 rounded-md text-center">
            <div className="text-xl font-semibold">Your BMI</div>
            <div className="text-4xl font-bold my-2">{bmi}</div>
            <div className={`text-lg font-medium ${categoryColor}`}>
              {category}
            </div>
            <p className="text-sm text-gray-500 mt-2">
              This result is based on your input. Consult with a healthcare professional for proper evaluation.
            </p>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default BmiCalculator;
