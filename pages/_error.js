
function Error({ statusCode }) {
    return (
        <>

            <section class="">

                <p className="">
                    {statusCode} - Ops! Ocorreu um erro inesperado.
                </p>
                <p className="">
                    Desculpe, alguma coisa estranha aconteceu.
                </p>
                <p><a href="/">Voltar para página inicial</a></p>

            </section>

        </>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error