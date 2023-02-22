export default function calculateBMI(berat, tinggi) 
{
  const bmi = berat / (tinggi * tinggi);
  let category;
  
  if (bmi < 18.5) 
    {
      category = 'Berat Kurang';
      } else if (bmi >= 18.5 && bmi <= 24.9) {
      category = 'Berat Normal';
      } else if (bmi >= 25 && bmi <= 29.9) {
      category = 'Kelebihan Berat';
      } else if (bmi >= 30) {
      category = 'Obesitas';
    }
  return { bmi, category };
}
  
  