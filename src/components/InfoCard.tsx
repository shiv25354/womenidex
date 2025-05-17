
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface InfoCardProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  headerClassName?: string;
}

const InfoCard = ({ title, description, icon, children, className = '', headerClassName = '' }: InfoCardProps) => {
  return (
    <Card className={`border shadow-sm ${className}`}>
      <CardHeader className={`pb-2 ${headerClassName}`}>
        <div className="flex items-start gap-2">
          {icon && <div className="text-bmi-purple text-xl">{icon}</div>}
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            {description && <CardDescription>{description}</CardDescription>}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        {children}
      </CardContent>
    </Card>
  );
};

export default InfoCard;
