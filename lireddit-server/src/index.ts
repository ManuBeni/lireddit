import {MikroORM} from "@mikro-orm/core"
import { __prod__ } from "./constants"
// import { Post } from "./entities/Post"
import mikroConfig from "./mikro-orm.config"

const main = async () => {

    // await RequestContext.createAsync(orm.em, async () => {
    //     // inside this handler the `orm.em` will actually use the contextual fork, created via `RequestContext.createAsync()`
    //     const post = orm.em.create(Post, {
    //       title: "my first post",
    //     });
    //     await orm.em.persistAndFlush(post);
    //     await orm.em.nativeInsert(Post, { title: "my first post 2" });
    //   });
    
    const orm = await MikroORM.init(mikroConfig)
    await orm.getMigrator().up()
    // const emFork = orm.em.fork()
    // const post = emFork.create(Post, { title: 'My first Post' } )
    // await emFork.persistAndFlush(post)
    // const res = await emFork.find(Post, {})
    // console.log(res)
}


main().catch(e=>console.log(e))


console.log("Hello world")