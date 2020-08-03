const buildCount = (i) => {
  let count = i;
  const displayCount = () => {
    console.log(count++);
  };
  return displayCount;
}; 

const myCount = buildCount(100);
myCount();
myCount();
myCount();

const myCount2 = buildCount(10);
myCount2();
myCount2();