export default function authHeader() {
  const brand = JSON.parse(localStorage.getItem("brand"));
  if (brand) {
    return {
      Authorization: "Bearer " + brand,
    };
  } else {
    return {};
  }
}

export function authHeaderLogin() {
  return {
    "Http-Client": window.location.host,
  };
}
