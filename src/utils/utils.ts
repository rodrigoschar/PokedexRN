export function getNumberId(id: number): string {
  switch (true) {
    case id > 0 && id < 10:
      return '00' + String(id);
    case id > 10 && id < 100:
      return '0' + String(id);
    default:
      return String(id);
  }
}
