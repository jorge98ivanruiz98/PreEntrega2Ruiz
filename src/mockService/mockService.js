export default function APICall() {
  const datausuario = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "jorge98ivan@gmail.com",
    },
  ];
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(datausuario);
    }, 1000);
  });
}
