import axios from 'axios';

// params status, bo_table, category, leng
export function getList(server, status, bo_table, category, leng) {
  if (server === "localhost:3000") {
    if (category === "print") {
      return [{"wr_id":"1","bo_table":"print","wr_subject":"print test","wr_img":null},{"wr_id":"2","bo_table":"print","wr_subject":"print test2","wr_img":null}]
    }
    if (category === "label") {
      return [{"wr_id":"1","bo_table":"label","wr_subject":"label test","wr_img":null},{"wr_id":"2","bo_table":"label","wr_subject":"label test2","wr_img":null}]
    } else {
      return [];
    }
  } else {
    return axios.get("/api/",{
      params : {
        "status" :  status,
        "bo_table" : bo_table,
        "category" : category,
        "leng" : leng
      }
    })
    .then(response => {
      return response.data
    })
  }
}
// params server, bo_table, sort, leng
export function latestList(server, status, bo_table, sort, leng) {
  if (server === "localhost:3000") {
    return [
      {
        "wr_id":"1",
        "wr_subject":"\ub274\uc2a4\ud14c\uc2a4\ud2b81",
        "wr_img":"http://dbrandtest.com/gnu/data/editor/1912/thumb-68e27b2f6d211c20123bd2bcffe7e045_1575966455_5338_460x240.jpg",
        "wr_datetime":"2019-12-10"
      },
      {
        "wr_id":"2",
        "wr_subject":"\ub274\uc2a4\ud14c\uc2a4\ud2b82",
        "wr_img":"http://dbrandtest.com/gnu/data/editor/1912/thumb-68e27b2f6d211c20123bd2bcffe7e045_1575966472_2617_460x240.png",
        "wr_datetime":"2019-12-10"
      },
      {
        "wr_id":"3",
        "wr_subject":"\ub274\uc2a4\ud14c\uc2a4\ud2b81",
        "wr_img":"http://dbrandtest.com/gnu/data/editor/1912/thumb-68e27b2f6d211c20123bd2bcffe7e045_1575966455_5338_460x240.jpg",
        "wr_datetime":"2019-12-10"
      },
      {
        "wr_id":"4",
        "wr_subject":"\ub274\uc2a4\ud14c\uc2a4\ud2b82",
        "wr_img":"http://dbrandtest.com/gnu/data/editor/1912/thumb-68e27b2f6d211c20123bd2bcffe7e045_1575966472_2617_460x240.png",
        "wr_datetime":"2019-12-10"
      },
      {
        "wr_id":"5",
        "wr_subject":"\ub274\uc2a4\ud14c\uc2a4\ud2b81",
        "wr_img":"http://dbrandtest.com/gnu/data/editor/1912/thumb-68e27b2f6d211c20123bd2bcffe7e045_1575966455_5338_460x240.jpg",
        "wr_datetime":"2019-12-10"
      },
      
    ]
  } else {
    return axios.get("/api/",{
      params : {
        "status" :  status,
        "bo_table" : bo_table,
        "sort" : sort,
        "leng" : leng
      }
    })
    .then(response => {
      return response.data
    })
  }
}