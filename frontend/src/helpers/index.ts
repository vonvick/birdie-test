export const formatFieldsName = (text: string) => {
  if (typeof text === 'string') {
    return text.replace(/_/gi, ' ');
  }

  return '';
}
