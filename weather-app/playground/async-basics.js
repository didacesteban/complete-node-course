console.log('Starting app');


setTimeout(() => {
  console.log('Inside callback');
}, 2000);

setTimeout(() => {
  console.log('Inside callback without delay');
}, 0);

console.log('Finishing app');
