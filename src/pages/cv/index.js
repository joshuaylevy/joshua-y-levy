import Layout from "../../components/layout.js";

export default function CV() {
    return(        
        <Layout>
            {exampleList.map(({ title }) => (
                <div key = {title}>
                    <p>
                        {title}
                    </p>
                </div>
            ))}
        </Layout>
    )
}