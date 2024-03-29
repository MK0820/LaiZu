// transformProps.js
export default function transformProps(chartProps) {
  const { width, height, payload } = chartProps;
  //console.log(chartProps); 可以用来验证数据是否正确
  return {
    data: payload.data,
    width,
    height,
  };
}