const ALink = (ctx) => {
    console.log(ctx);
    return (<><a style={{"color":"white"}} href={ctx.ctx.linkUrl} >
        <i style={{"font-size":"25px"}} className={ctx.ctx.fontAwsom}></i>
    </a>
    </>);
}

export default ALink;