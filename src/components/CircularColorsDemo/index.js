import dynamic from "next/dynamic";

const CircularColorsDemoLazy = dynamic(()=> import("./CircularColorsDemo"));

export default CircularColorsDemoLazy;