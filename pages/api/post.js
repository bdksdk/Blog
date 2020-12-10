const posts=[{
  title:"test basliq",
  details:"detallar",
  date:"10 dekabr 2020"
}];
export default(req,res)=>{
  res.json({posts});
}