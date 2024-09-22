import React, { useState } from 'react';

// Card component
const Card = ({ children, className }) => (
  <div className={`bg-white shadow-lg rounded-lg ${className}`}>
    {children}
  </div>
);

// CardHeader component
const CardHeader = ({ children, className }) => (
  <div className={`px-6 py-4 border-b border-gray-200 ${className}`}>
    {children}
  </div>
);

// CardContent component
const CardContent = ({ children, className }) => (
  <div className={`px-6 py-4 ${className}`}>
    {children}
  </div>
);

// Checkbox component
const Checkbox = ({ id, checked, onCheckedChange }) => (
  <input
    type="checkbox"
    id={id}
    checked={checked}
    onChange={() => onCheckedChange(!checked)}
    className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-400"
  />
);

// Label component
const Label = ({ htmlFor, children, className }) => (
  <label htmlFor={htmlFor} className={`ml-2 text-sm text-gray-700 ${className}`}>
    {children}
  </label>
);

// Button component
const Button = ({ onClick, children, className }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition duration-200 ${className}`}
  >
    {children}
  </button>
);

const FeatureBasedPriceCalculator = () => {
  const features = [
    { "feature": "User Registration and Login", "price": 10000 },
    { "feature": "Login with Google", "price": 5000 },
    { "feature": "Login with Facebook", "price": 7000 },
    { "feature": "Email Verification", "price": 3000 },
    { "feature": "Password Reset", "price": 2500 },
    { "feature": "User Profile Management", "price": 5000 },
    { "feature": "Multi-vendor Support", "price": 15000 },
    { "feature": "Dynamic Product Listing Homage", "price": 10000 },
     { "feature": "Paid Boosting Ads", "price": 10000 },
    { "feature": "Product Search", "price": 7000 },
    { "feature": "Advanced Search with Filters", "price": 12000 },
    { "feature": "Product Categories and Subcategories", "price": 6000 },
    { "feature": "Product Reviews and Ratings", "price": 8000 },
     { "feature": "Product Comments", "price": 8000 },
    { "feature": "Bookmark", "price": 2000 },
    { "feature": "Basic Analytics Dashboard", "price": 7000 },
    { "feature": "Advanced Analytics and Reporting", "price": 25000 },
    { "feature": "Email Notifications", "price": 7000 },
    { "feature": "SMS Notifications", "price": 12000 },
    { "feature": "Responsive Design", "price": 20000 },
    { "feature": "Admin Panel + CMS", "price": 40000 },
    { "feature": "Multi-language Support", "price": 20000 },
    { "feature": "Multi-currency Support", "price": 18000 },
    { "feature": "SEO Optimization", "price": 15000 }
  ];

  const [selectedFeatures, setSelectedFeatures] = useState([]);

  const toggleFeature = (feature) => {
    setSelectedFeatures(prevSelected =>
      prevSelected.includes(feature)
        ? prevSelected.filter(f => f !== feature)
        : [...prevSelected, feature]
    );
  };

  const checkAll = () => {
    setSelectedFeatures(features.map(f => f.feature));
  };

  const removeAll = () => {
    setSelectedFeatures([]);
  };

  const calculateTotalPrice = () => {
    return selectedFeatures.reduce((total, feature) => {
      const featureData = features.find(f => f.feature === feature);
      return total + (featureData ? featureData.price : 0);
    }, 0);
  };

  return (
    <Card className="w-full max-w-3xl mx-auto bg-gray-50">
      <CardHeader>
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Marketplace Feature-based Price Calculator
        </h2>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex justify-between mb-4">
            <Button onClick={checkAll} className="bg-green-500 hover:bg-green-600">Check All</Button>
            <Button onClick={removeAll} className="bg-red-500 hover:bg-red-600">Remove All</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature) => (
              <div key={feature.feature} className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded transition duration-200">
                <Checkbox
                  id={feature.feature}
                  checked={selectedFeatures.includes(feature.feature)}
                  onCheckedChange={() => toggleFeature(feature.feature)}
                />
                <Label htmlFor={feature.feature} className="flex-grow">
                  <span className="font-medium">{feature.feature}</span>
                  <span className="ml-1 text-gray-500">(NPR {feature.price.toLocaleString()})</span>
                </Label>
              </div>
            ))}
          </div>
          <div className="text-xl font-bold text-right text-gray-800 bg-blue-100 p-4 rounded-lg">
            Total Price: NPR {calculateTotalPrice().toLocaleString()}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeatureBasedPriceCalculator;