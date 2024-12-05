import React, {  useState } from 'react';
import Card from './components/card/Card';
import Button from './components/elements/Button';
import Checkbox from './components/form/Checkbox';
import FormLabel from './components/form/FormLabel';
import jsonData from './data/ecommerce.json';

interface Feature {
  feature: string;
  price: number;
}

const FeatureBasedPriceCalculator = () => {
  const [features, setFeatures] = useState<Feature[]>(jsonData);
  const [selectedFeatures, setSelectedFeatures] = useState<Feature[]>([]);

  const toggleFeature = (feature: Feature) => {
    setSelectedFeatures((prevSelected) =>
      prevSelected.includes(feature)
        ? prevSelected.filter((f) => f !== feature)
        : [...prevSelected, feature]
    );
  };

  const checkAll = () => {
    setSelectedFeatures(features);
  };

  const removeAll = () => {
    setSelectedFeatures([]);
  };

  const calculateTotalPrice = () => {
    return selectedFeatures.reduce((total, feature) => {
      const featureData = features.find((f) => f.feature === feature.feature);
      return total + (featureData ? featureData.price : 0);
    }, 0);
  };

  return (
    <Card className="w-full max-w-3xl mx-auto bg-gray-50">
      <Card.CardHeader>
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Marketplace Feature-based Price Calculator
        </h2>
      </Card.CardHeader>
      <Card.CardContent>
        <div className="space-y-6">
          <div className="flex justify-between mb-4">
            <Button
              onClick={checkAll}
              className="bg-green-500 hover:bg-green-600"
            >
              Check All
            </Button>
            <Button onClick={removeAll} className="bg-red-500 hover:bg-red-600">
              Remove All
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature) => (
              <div
                key={feature.feature}
                className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded transition duration-200"
              >
                <Checkbox
                  id={feature.feature}
                  checked={selectedFeatures.includes(feature)}
                  onCheckedChange={() => toggleFeature(feature)}
                />
                <FormLabel htmlFor={feature.feature} className="flex-grow">
                  <span className="font-medium">{feature.feature}</span>
                  <span className="ml-1 text-gray-500">
                    (NPR {feature.price.toLocaleString()})
                  </span>
                </FormLabel>
              </div>
            ))}
          </div>
          <div className="text-xl font-bold text-right text-gray-800 bg-blue-100 p-4 rounded-lg">
            Total Price: NPR {calculateTotalPrice().toLocaleString()}
          </div>
        </div>
      </Card.CardContent>
    </Card>
  );
};

export default FeatureBasedPriceCalculator;