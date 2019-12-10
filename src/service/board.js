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