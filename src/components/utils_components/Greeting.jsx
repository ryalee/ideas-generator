export default function Greeting() {
  const hour = new Date().getHours();
  if (hour <= 12) {
    return 'Bom dia,';
  } else if (hour <= 18) {
    return 'Boa tarde,';
  } else {
    return 'Boa noite,';
  }
}