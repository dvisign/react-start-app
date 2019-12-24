import axios from 'axios';

// params status, bo_table, category, leng
export function getList(server, status, bo_table, category, leng, sort) {
  if (server === "localhost:3000") {
    if (bo_table === "prints") {
      if (category === "print") {
        return [{"wr_id":"4","bo_table":"","wr_subject":"\ub300\ud615\uc778\uc1c4\uae30 Series \ucca0\ud310\uc778\uc1c4\ub77c\uc778","wr_img":"http://dbrandtest.com/gnu/data/editor/1912/thumb-bebd60aac00ef3137b09b503878ad53c_1576547002_9791_460x240.png"},{"wr_id":"5","bo_table":"","wr_subject":"\ub9c8\ud06c\uc7a5\ube44","wr_img":"http://dbrandtest.com/gnu/data/editor/1912/thumb-bebd60aac00ef3137b09b503878ad53c_1576547025_6263_460x240.png"},{"wr_id":"6","bo_table":"","wr_subject":"2POST Series T2-460","wr_img":"http://dbrandtest.com/gnu/data/editor/1912/thumb-bebd60aac00ef3137b09b503878ad53c_1576547045_9688_460x240.png"},{"wr_id":"7","bo_table":"","wr_subject":"\ub300\ud615\uc778\uc1c4\uae30 Series \ucca0\ud310\uc778\uc1c4\ub77c\uc778","wr_img":"http://dbrandtest.com/gnu/data/editor/1912/thumb-bebd60aac00ef3137b09b503878ad53c_1576547002_9791_460x240.png"},{"wr_id":"8","bo_table":"","wr_subject":"\ub9c8\ud06c\uc7a5\ube44","wr_img":"http://dbrandtest.com/gnu/data/editor/1912/thumb-bebd60aac00ef3137b09b503878ad53c_1576547025_6263_460x240.png"},{"wr_id":"9","bo_table":"","wr_subject":"2POST Series T2-460","wr_img":"http://dbrandtest.com/gnu/data/editor/1912/thumb-bebd60aac00ef3137b09b503878ad53c_1576547045_9688_460x240.png"},{"wr_id":"10","bo_table":"","wr_subject":"\ub300\ud615\uc778\uc1c4\uae30 Series \ucca0\ud310\uc778\uc1c4\ub77c\uc778","wr_img":"http://dbrandtest.com/gnu/data/editor/1912/thumb-bebd60aac00ef3137b09b503878ad53c_1576547002_9791_460x240.png"},{"wr_id":"11","bo_table":"","wr_subject":"\ub9c8\ud06c\uc7a5\ube44","wr_img":"http://dbrandtest.com/gnu/data/editor/1912/thumb-bebd60aac00ef3137b09b503878ad53c_1576547025_6263_460x240.png"},{"wr_id":"12","bo_table":"","wr_subject":"2POST Series T2-460","wr_img":"http://dbrandtest.com/gnu/data/editor/1912/thumb-bebd60aac00ef3137b09b503878ad53c_1576547045_9688_460x240.png"}]
      }
      if (category === "label") {
        return [{"wr_id":"4","bo_table":"","wr_subject":"\ub300\ud615\uc778\uc1c4\uae30 Series \ucca0\ud310\uc778\uc1c4\ub77c\uc778","wr_img":"http://dbrandtest.com/gnu/data/editor/1912/thumb-bebd60aac00ef3137b09b503878ad53c_1576547002_9791_460x240.png"},{"wr_id":"5","bo_table":"","wr_subject":"\ub9c8\ud06c\uc7a5\ube44","wr_img":"http://dbrandtest.com/gnu/data/editor/1912/thumb-bebd60aac00ef3137b09b503878ad53c_1576547025_6263_460x240.png"},{"wr_id":"6","bo_table":"","wr_subject":"2POST Series T2-460","wr_img":"http://dbrandtest.com/gnu/data/editor/1912/thumb-bebd60aac00ef3137b09b503878ad53c_1576547045_9688_460x240.png"}]
      }
      if (category === "engraving") {
        return [{"wr_id":"4","bo_table":"","wr_subject":"\ub300\ud615\uc778\uc1c4\uae30 Series \ucca0\ud310\uc778\uc1c4\ub77c\uc778","wr_img":"http://dbrandtest.com/gnu/data/editor/1912/thumb-bebd60aac00ef3137b09b503878ad53c_1576547002_9791_460x240.png"},{"wr_id":"5","bo_table":"","wr_subject":"\ub9c8\ud06c\uc7a5\ube44","wr_img":"http://dbrandtest.com/gnu/data/editor/1912/thumb-bebd60aac00ef3137b09b503878ad53c_1576547025_6263_460x240.png"},{"wr_id":"6","bo_table":"","wr_subject":"2POST Series T2-460","wr_img":"http://dbrandtest.com/gnu/data/editor/1912/thumb-bebd60aac00ef3137b09b503878ad53c_1576547045_9688_460x240.png"}]
      }
      if (category === "dry") {
        return [{"wr_id":"4","bo_table":"","wr_subject":"\ub300\ud615\uc778\uc1c4\uae30 Series \ucca0\ud310\uc778\uc1c4\ub77c\uc778","wr_img":"http://dbrandtest.com/gnu/data/editor/1912/thumb-bebd60aac00ef3137b09b503878ad53c_1576547002_9791_460x240.png"},{"wr_id":"5","bo_table":"","wr_subject":"\ub9c8\ud06c\uc7a5\ube44","wr_img":"http://dbrandtest.com/gnu/data/editor/1912/thumb-bebd60aac00ef3137b09b503878ad53c_1576547025_6263_460x240.png"},{"wr_id":"6","bo_table":"","wr_subject":"2POST Series T2-460","wr_img":"http://dbrandtest.com/gnu/data/editor/1912/thumb-bebd60aac00ef3137b09b503878ad53c_1576547045_9688_460x240.png"}]
      }
    }
    if (bo_table === "autos") {
      if (category === "touch") {
        return [{"wr_id":"4","bo_table":"","wr_subject":"터치장비1","wr_img":"http://dbrandtest.com/gnu/data/editor/1912/thumb-bebd60aac00ef3137b09b503878ad53c_1576547002_9791_460x240.png"},{"wr_id":"5","bo_table":"","wr_subject":"\ub9c8\ud06c\uc7a5\ube44","wr_img":"http://dbrandtest.com/gnu/data/editor/1912/thumb-bebd60aac00ef3137b09b503878ad53c_1576547025_6263_460x240.png"},{"wr_id":"6","bo_table":"","wr_subject":"2POST Series T2-460","wr_img":"http://dbrandtest.com/gnu/data/editor/1912/thumb-bebd60aac00ef3137b09b503878ad53c_1576547045_9688_460x240.png"},{"wr_id":"7","bo_table":"","wr_subject":"\ub300\ud615\uc778\uc1c4\uae30 Series \ucca0\ud310\uc778\uc1c4\ub77c\uc778","wr_img":"http://dbrandtest.com/gnu/data/editor/1912/thumb-bebd60aac00ef3137b09b503878ad53c_1576547002_9791_460x240.png"},{"wr_id":"8","bo_table":"","wr_subject":"\ub9c8\ud06c\uc7a5\ube44","wr_img":"http://dbrandtest.com/gnu/data/editor/1912/thumb-bebd60aac00ef3137b09b503878ad53c_1576547025_6263_460x240.png"},{"wr_id":"9","bo_table":"","wr_subject":"2POST Series T2-460","wr_img":"http://dbrandtest.com/gnu/data/editor/1912/thumb-bebd60aac00ef3137b09b503878ad53c_1576547045_9688_460x240.png"},{"wr_id":"10","bo_table":"","wr_subject":"\ub300\ud615\uc778\uc1c4\uae30 Series \ucca0\ud310\uc778\uc1c4\ub77c\uc778","wr_img":"http://dbrandtest.com/gnu/data/editor/1912/thumb-bebd60aac00ef3137b09b503878ad53c_1576547002_9791_460x240.png"},{"wr_id":"11","bo_table":"","wr_subject":"\ub9c8\ud06c\uc7a5\ube44","wr_img":"http://dbrandtest.com/gnu/data/editor/1912/thumb-bebd60aac00ef3137b09b503878ad53c_1576547025_6263_460x240.png"},{"wr_id":"12","bo_table":"","wr_subject":"2POST Series T2-460","wr_img":"http://dbrandtest.com/gnu/data/editor/1912/thumb-bebd60aac00ef3137b09b503878ad53c_1576547045_9688_460x240.png"}]
      }
      if (category === "robot") {
        return [{"wr_id":"4","bo_table":"","wr_subject":"\ub300\ud615\uc778\uc1c4\uae30 Series \ucca0\ud310\uc778\uc1c4\ub77c\uc778","wr_img":"http://dbrandtest.com/gnu/data/editor/1912/thumb-bebd60aac00ef3137b09b503878ad53c_1576547002_9791_460x240.png"},{"wr_id":"5","bo_table":"","wr_subject":"\ub9c8\ud06c\uc7a5\ube44","wr_img":"http://dbrandtest.com/gnu/data/editor/1912/thumb-bebd60aac00ef3137b09b503878ad53c_1576547025_6263_460x240.png"},{"wr_id":"6","bo_table":"","wr_subject":"2POST Series T2-460","wr_img":"http://dbrandtest.com/gnu/data/editor/1912/thumb-bebd60aac00ef3137b09b503878ad53c_1576547045_9688_460x240.png"}]
      }
      if (category === "auto") {
        return [{"wr_id":"4","bo_table":"","wr_subject":"\ub300\ud615\uc778\uc1c4\uae30 Series \ucca0\ud310\uc778\uc1c4\ub77c\uc778","wr_img":"http://dbrandtest.com/gnu/data/editor/1912/thumb-bebd60aac00ef3137b09b503878ad53c_1576547002_9791_460x240.png"},{"wr_id":"5","bo_table":"","wr_subject":"\ub9c8\ud06c\uc7a5\ube44","wr_img":"http://dbrandtest.com/gnu/data/editor/1912/thumb-bebd60aac00ef3137b09b503878ad53c_1576547025_6263_460x240.png"},{"wr_id":"6","bo_table":"","wr_subject":"2POST Series T2-460","wr_img":"http://dbrandtest.com/gnu/data/editor/1912/thumb-bebd60aac00ef3137b09b503878ad53c_1576547045_9688_460x240.png"}]
      } 
    }
    if (bo_table === "news") {
      return [
        {
          "pager" : {
            "total_page" : "7",
            "prev_page" : "0",
            "next_page" : "2",
            "first_page" : "1",
            "last_page" : "3",
            "block" : "1"
          }
        },{
          "list":[
            {
              "wr_id":"4",
              "bo_table":"",
              "wr_subject":"\ud504\ub9b0\ud2f0\uc2a4 \ub274\uc2a4 \ud14c\uc2a4\ud2b82",
              "wr_img":"http://printis.co.kr/gnu/data/editor/1912/thumb-b028a30452fab706ac88fed267c2cccc_1576829732_7965_460x240.png",
              "wr_todays" : "true",
              "wr_datetime":"2019-12-20 17:15:38"
            },
            {
              "wr_id":"6",
              "bo_table":"",
              "wr_subject":"\ud504\ub9b0\ud2f0\uc2a4 \ub274\uc2a4 \ud14c\uc2a4\ud2b82",
              "wr_img":"http://printis.co.kr/gnu/data/editor/1912/thumb-b028a30452fab706ac88fed267c2cccc_1576829732_7965_460x240.png",
              "wr_todays" : "false",
              "wr_datetime":"2019-12-20 17:15:38"
            },
            {
              "wr_id":"8",
              "bo_table":"",
              "wr_subject":"\ud504\ub9b0\ud2f0\uc2a4 \ub274\uc2a4 \ud14c\uc2a4\ud2b82",
              "wr_img":"http://printis.co.kr/gnu/data/editor/1912/thumb-b028a30452fab706ac88fed267c2cccc_1576829732_7965_460x240.png",
              "wr_todays" : "false",
              "wr_datetime":"2019-12-20 17:15:38"
            },
            {
              "wr_id":"10",
              "bo_table":"",
              "wr_subject":"\ud504\ub9b0\ud2f0\uc2a4 \ub274\uc2a4 \ud14c\uc2a4\ud2b82",
              "wr_img":"http://printis.co.kr/gnu/data/editor/1912/thumb-b028a30452fab706ac88fed267c2cccc_1576829732_7965_460x240.png",
              "wr_todays" : "false",
              "wr_datetime":"2019-12-20 17:15:38"
            },
            {
              "wr_id":"12",
              "bo_table":"",
              "wr_subject":"\ud504\ub9b0\ud2f0\uc2a4 \ub274\uc2a4 \ud14c\uc2a4\ud2b82",
              "wr_img":"http://printis.co.kr/gnu/data/editor/1912/thumb-b028a30452fab706ac88fed267c2cccc_1576829732_7965_460x240.png",
              "wr_todays" : "false",
              "wr_datetime":"2019-12-20 17:15:38"
            },
            {
              "wr_id":"14",
              "bo_table":"",
              "wr_subject":"\ud504\ub9b0\ud2f0\uc2a4 \ub274\uc2a4 \ud14c\uc2a4\ud2b82",
              "wr_img":"http://printis.co.kr/gnu/data/editor/1912/thumb-b028a30452fab706ac88fed267c2cccc_1576829732_7965_460x240.png",
              "wr_todays" : "false",
              "wr_datetime":"2019-12-20 17:15:38"
            },
            {
              "wr_id":"16",
              "bo_table":"",
              "wr_subject":"\ud504\ub9b0\ud2f0\uc2a4 \ub274\uc2a4 \ud14c\uc2a4\ud2b82",
              "wr_img":"http://printis.co.kr/gnu/data/editor/1912/thumb-b028a30452fab706ac88fed267c2cccc_1576829732_7965_460x240.png",
              "wr_todays" : "false",
              "wr_datetime":"2019-12-20 17:15:38"
            },
            {
              "wr_id":"18",
              "bo_table":"",
              "wr_subject":"\ud504\ub9b0\ud2f0\uc2a4 \ub274\uc2a4 \ud14c\uc2a4\ud2b82",
              "wr_img":"http://printis.co.kr/gnu/data/editor/1912/thumb-b028a30452fab706ac88fed267c2cccc_1576829732_7965_460x240.png",
              "wr_todays" : "false",
              "wr_datetime":"2019-12-20 17:15:38"
            },
            {
              "wr_id":"5",
              "bo_table":"",
              "wr_subject":"\ud504\ub9b0\ud2f0\uc2a4 \ub274\uc2a4 \ud14c\uc2a4\ud2b8",
              "wr_img":null,
              "wr_todays" : "false",
              "wr_datetime":"2019-12-20 17:12:26"
            }
          ]
        }
      ]
    }
  } else {
    return axios.get("/api/",{
      params : {
        "status" :  status,
        "bo_table" : bo_table,
        "category" : category,
        "leng" : leng,
        "sort" : sort,
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
        "wr_datetime":"2019-12-24",
        "pager":"1",
        "wr_todays" : true
      },
      {
        "wr_id":"2",
        "wr_subject":"\ub274\uc2a4\ud14c\uc2a4\ud2b82",
        "wr_img":"http://dbrandtest.com/gnu/data/editor/1912/thumb-68e27b2f6d211c20123bd2bcffe7e045_1575966472_2617_460x240.png",
        "wr_datetime":"2019-12-10",
        "pager":"1",
        "wr_todays" : false
      },
      {
        "wr_id":"3",
        "wr_subject":"\ub274\uc2a4\ud14c\uc2a4\ud2b81",
        "wr_img":"http://dbrandtest.com/gnu/data/editor/1912/thumb-68e27b2f6d211c20123bd2bcffe7e045_1575966455_5338_460x240.jpg",
        "wr_datetime":"2019-12-10",
        "pager":"1",
        "wr_todays" : false
      },
      {
        "wr_id":"4",
        "wr_subject":"\ub274\uc2a4\ud14c\uc2a4\ud2b82",
        "wr_img":"http://dbrandtest.com/gnu/data/editor/1912/thumb-68e27b2f6d211c20123bd2bcffe7e045_1575966472_2617_460x240.png",
        "wr_datetime":"2019-12-10",
        "pager":"1",
        "wr_todays" : false
      },
      {
        "wr_id":"5",
        "wr_subject":"\ub274\uc2a4\ud14c\uc2a4\ud2b81",
        "wr_img":"http://dbrandtest.com/gnu/data/editor/1912/thumb-68e27b2f6d211c20123bd2bcffe7e045_1575966455_5338_460x240.jpg",
        "wr_datetime":"2019-12-10",
        "pager":"1",
        "wr_todays" : false
      }      
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
// params server, bo_table, wr_id
export function getViewData(server, status, bo_table, wr_id) {
  if (server === "localhost:3000") {
    return [
      {
        "wr_id":"5",
        "wr_subject":"\ub300\ud615\uc778\uc1c4\uae30 Series \ucca0\ud310\uc778\uc1c4\ub77c\uc778",
        "wr_datetime":"2019-12-20 17:15:38",
        "wr_name":"\ucd5c\uace0\uad00\ub9ac\uc790",
        "wr_content":"<p><img src='http://dbrandtest.com/gnu/data/editor/1912/bebd60aac00ef3137b09b503878ad53c_1576547002_9791.png' ></p><p>\ub300\ud615\uc778\uc1c4\uae30 Series \ucca0\ud310\uc778\uc1c4\ub77c\uc778 \uc124\uba85</p>"
      }
    ]
  } else {
    return axios.get("/api/",{
      params : {
        "status" :  status,
        "bo_table" : bo_table,
        "wr_id" : wr_id
      }
    })
    .then(response => {
      return response.data
    })
  }
}