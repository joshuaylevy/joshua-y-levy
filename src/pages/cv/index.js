import Layout from "../../components/layout.js";

const exampleList = [
    {title: "TITLE HOLDER"},
    {title: "TITLE HOLDER"},
    {title: "TITLE HOLDER"},
    {title: "TITLE HOLDER"},
]


export default function CV() {
    return(        
        <Layout>
            {exampleList.map(({ title, }) => (
                <div key = {title}>
                    <p>
                        {title}
                    </p>
                </div>
            ))}
        </Layout>
    )
}