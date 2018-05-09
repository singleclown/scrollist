const storage = nattyStorage({
              type:'localStorage',  // 缓存方式, 默认为'localStorage'
              key:'userData',     // !!! 唯一必选的参数, 用于内部存储 !!!          // 缓存的标记, 用于判断是否有效
      });
const monStorage = nattyStorage({
              type:'localStorage',  // 缓存方式, 默认为'localStorage'
              key:'userData',         // 缓存的标记, 用于判断是否有效
              duration: 1000 * 60 * 6     // !!! 唯一必选的参数, 用于内部存储 !!!          // 缓存的标记, 用于判断是否有效
      });      
export {storage as Storage,monStorage };
