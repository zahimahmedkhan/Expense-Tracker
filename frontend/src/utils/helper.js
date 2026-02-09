import moment from "moment";

export const validateEmail = (email) => {
  const Regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return Regex.test(email);
};

export const getInitials = (name) => {
  if (!name) return "";

  const words = name.split(" ");
  let initials = "";
  for (let i = 0; i < Math.min(2, words.length); i++) {
    initials += words[i][0];
  }

  return initials.toUpperCase();
};

export const addThousandSeparator = (num) => {
  if (num === null || isNaN(num)) return "";

  const [integerpart, fractionalPart] = num.toString().split(".");
  const fromattedInteger = integerpart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return fractionalPart
    ? `${fromattedInteger}.${fractionalPart}`
    : fromattedInteger;
};

export const prepareExpenseBarChartData = (data = []) => {
  const chartData = data.map((item)=>({
    category : item?.category,
    amount : item?.amount
  }));
  return chartData;
}

export const prepareIncomeBarChartData = (data = [])=> {
  const storedData = [...data].sort((a, b) => new Date(a.Date) - new Date(b.Date));
  const chartData = storedData.map((item)=>({
    month : moment(item?.date).format("Do MMM"),
    amount : item?.amount,
    source : item?.source
  }))
  return chartData;
}

export const prepareExpenseLineChartData =(data=[])=>{
  const storedData = [...data].sort((a, b)=>{ new Date(a.Date) - new Date(b.Date)});

  const chartData = storedData.map((item)=>({
    month : moment(item?.date).format("Do MMM"),
    amount : item?.amount,
    category : item?.category
  }))
  return chartData;
}
