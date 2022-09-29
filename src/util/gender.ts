export const filterGender = (gender: string | null): 'Male' | 'Female' | 'Unisex' => {
  if (gender === 'Men') return 'Male';
  else if (gender === 'Women') return 'Female';
  return 'Unisex';
};
