const px2vw = (size:any, width = 1440) => `${(size / width) * 100}vw`;

export default px2vw;