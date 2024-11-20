export default function Hello(app) {
app.get("/hello", (req, res)=>{
    res.send("Hey there");
});
app.get("/", (req, res) => {
    res.send("Welcome to web dev")
});
}
