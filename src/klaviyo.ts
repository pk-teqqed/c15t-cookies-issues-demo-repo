export const pushDataToKlaviyo = (data: any) => {
  // @ts-ignore
  (window._learnq ?? [])?.push(data)
}