
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const BmiTable = () => {
  const bmiCategories = [
    { category: 'Severe Thinness', range: 'Below 16', color: 'bg-bmi-underweight/20' },
    { category: 'Moderate Thinness', range: '16 - 16.9', color: 'bg-bmi-underweight/20' },
    { category: 'Mild Thinness', range: '17 - 18.4', color: 'bg-bmi-underweight/20' },
    { category: 'Healthy Weight (Normal)', range: '18.5 - 24.9', color: 'bg-bmi-normal/20' },
    { category: 'Overweight', range: '25.0 - 29.9', color: 'bg-bmi-overweight/20' },
    { category: 'Obesity Class I', range: '30.0 - 34.9', color: 'bg-bmi-obese/20' },
    { category: 'Obesity Class II', range: '35.0 - 39.9', color: 'bg-bmi-obese/20' },
    { category: 'Obesity Class III (Severe Obesity)', range: '40.0 or greater', color: 'bg-bmi-obese/20' },
  ];

  return (
    <Card>
      <CardHeader className="bg-bmi-light-purple">
        <CardTitle className="text-2xl font-semibold">BMI Category Ranges for Adults</CardTitle>
        <CardDescription>
          Standard categories based on World Health Organization (WHO) classification
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <Table>
          <TableCaption>
            Note: Severe, Moderate, and Mild Thinness are subcategories within Underweight. Obesity is sub-divided into 3 classes.
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-1/2">BMI Category</TableHead>
              <TableHead>BMI Range (kg/m²)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bmiCategories.map((item, index) => (
              <TableRow key={index} className={item.color}>
                <TableCell className="font-medium">{item.category}</TableCell>
                <TableCell>{item.range}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default BmiTable;
