
import React from 'react';

export interface ContactFormData {
  fullName: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  icon: React.ReactNode;
}

export interface IndustryItem {
  name: string;
  icon: React.ReactNode;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}
