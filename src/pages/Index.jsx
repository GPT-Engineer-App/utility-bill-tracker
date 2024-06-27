import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    accountNumber: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    bills: Array(12).fill({ startGasMeterReadDate: '', totalThermsUsed: '', kWhUsage: '', totalKWhMonthlyCost: '' }),
  });

  const handleChange = (e, index, field) => {
    if (index !== undefined) {
      const newBills = [...formData.bills];
      newBills[index][field] = e.target.value;
      setFormData({ ...formData, bills: newBills });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl text-center mb-4">Utility Billing Auditor</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input placeholder="Name" name="name" value={formData.name} onChange={handleChange} />
          <Input placeholder="Account Number" name="accountNumber" value={formData.accountNumber} onChange={handleChange} />
          <Input placeholder="Address" name="address" value={formData.address} onChange={handleChange} />
          <Input placeholder="City" name="city" value={formData.city} onChange={handleChange} />
          <Input placeholder="State" name="state" value={formData.state} onChange={handleChange} />
          <Input placeholder="Zip Code" name="zipCode" value={formData.zipCode} onChange={handleChange} />
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Month</TableHead>
              <TableHead>Start Gas Meter Read Date</TableHead>
              <TableHead>Total Therms Used</TableHead>
              <TableHead>kWh Usage</TableHead>
              <TableHead>Total kWh Monthly Cost</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {formData.bills.map((bill, index) => (
              <TableRow key={index}>
                <TableCell>{new Date(0, index).toLocaleString('default', { month: 'long' })}</TableCell>
                <TableCell>
                  <Input
                    placeholder="Start Gas Meter Read Date"
                    value={bill.startGasMeterReadDate}
                    onChange={(e) => handleChange(e, index, 'startGasMeterReadDate')}
                  />
                </TableCell>
                <TableCell>
                  <Input
                    placeholder="Total Therms Used"
                    value={bill.totalThermsUsed}
                    onChange={(e) => handleChange(e, index, 'totalThermsUsed')}
                  />
                </TableCell>
                <TableCell>
                  <Input
                    placeholder="kWh Usage"
                    value={bill.kWhUsage}
                    onChange={(e) => handleChange(e, index, 'kWhUsage')}
                  />
                </TableCell>
                <TableCell>
                  <Input
                    placeholder="Total kWh Monthly Cost"
                    value={bill.totalKWhMonthlyCost}
                    onChange={(e) => handleChange(e, index, 'totalKWhMonthlyCost')}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Index;