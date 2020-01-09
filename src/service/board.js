import axios from 'axios';

// params status, bo_table, category, leng
export function getList(server, status, bo_table, category, leng, sort) {
  if (server === "localhost:3000") {
    if (bo_table === "prints") {
      if (category === "print") {
        return [
          {
            "wr_id":"4",
            "bo_table":"",
            "wr_subject":"\ub300\ud615\uc778\uc1c4\uae30 Series \ucca0\ud310\uc778\uc1c4\ub77c\uc778",
            "wr_img":"http://dbrandtest.com/gnu/data/editor/1912/thumb-bebd60aac00ef3137b09b503878ad53c_1576547002_9791_460x240.png"
          },
          {
            "wr_id":"5",
            "bo_table":"",
            "wr_subject":"\ub9c8\ud06c\uc7a5\ube44",
            "wr_img":"http://dbrandtest.com/gnu/data/editor/1912/thumb-bebd60aac00ef3137b09b503878ad53c_1576547025_6263_460x240.png"
          },{
            "wr_id":"6",
            "bo_table":"",
            "wr_subject":"2POST Series T2-460",
            "wr_img":"http://dbrandtest.com/gnu/data/editor/1912/thumb-bebd60aac00ef3137b09b503878ad53c_1576547045_9688_460x240.png"
          },{
            "wr_id":"7",
            "bo_table":"",
            "wr_subject":"\ub300\ud615\uc778\uc1c4\uae30 Series \ucca0\ud310\uc778\uc1c4\ub77c\uc778",
            "wr_img":"http://dbrandtest.com/gnu/data/editor/1912/thumb-bebd60aac00ef3137b09b503878ad53c_1576547002_9791_460x240.png"
          },{
            "wr_id":"8",
            "bo_table":"",
            "wr_subject":"\ub9c8\ud06c\uc7a5\ube44",
            "wr_img":"http://dbrandtest.com/gnu/data/editor/1912/thumb-bebd60aac00ef3137b09b503878ad53c_1576547025_6263_460x240.png"
          },{
            "wr_id":"9",
            "bo_table":"",
            "wr_subject":"2POST Series T2-460",
            "wr_img":"http://dbrandtest.com/gnu/data/editor/1912/thumb-bebd60aac00ef3137b09b503878ad53c_1576547045_9688_460x240.png"
          },{
            "wr_id":"10",
            "bo_table":"",
            "wr_subject":"\ub300\ud615\uc778\uc1c4\uae30 Series \ucca0\ud310\uc778\uc1c4\ub77c\uc778",
            "wr_img":"http://dbrandtest.com/gnu/data/editor/1912/thumb-bebd60aac00ef3137b09b503878ad53c_1576547002_9791_460x240.png"
          },{
            "wr_id":"11",
            "bo_table":"",
            "wr_subject":"\ub9c8\ud06c\uc7a5\ube44",
            "wr_img":"http://dbrandtest.com/gnu/data/editor/1912/thumb-bebd60aac00ef3137b09b503878ad53c_1576547025_6263_460x240.png"
          },{
            "wr_id":"12",
            "bo_table":"",
            "wr_subject":"2POST Series T2-460",
            "wr_img":"http://dbrandtest.com/gnu/data/editor/1912/thumb-bebd60aac00ef3137b09b503878ad53c_1576547045_9688_460x240.png"
          }
        ]
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
              "wr_subject":"뉴스테스트 날짜출력뉴스테스트 날짜출력...",
              "wr_img":"http://printis.co.kr/gnu/data/editor/1912/thumb-2ec3e6885f3fdbc4edc7db923ba6eaba_1577344925_9043_460x460.jpg",
              "wr_todays" : "true",
              "wr_datetime":"2019-12-20 17:15:38"
            },
            {
              "wr_id":"6",
              "bo_table":"",
              "wr_subject":"\ud504\ub9b0\ud2f0\uc2a4 \ub274\uc2a4 \ud14c\uc2a4\ud2b82",
              "wr_img":"http://printis.co.kr/gnu/data/editor/1912/thumb-2ec3e6885f3fdbc4edc7db923ba6eaba_1577344925_9043_460x460.jpg",
              "wr_todays" : "false",
              "wr_datetime":"2019-12-20 17:15:38"
            },
            {
              "wr_id":"8",
              "bo_table":"",
              "wr_subject":"\ud504\ub9b0\ud2f0\uc2a4 \ub274\uc2a4 \ud14c\uc2a4\ud2b82",
              "wr_img":"http://printis.co.kr/gnu/data/editor/1912/thumb-2ec3e6885f3fdbc4edc7db923ba6eaba_1577344925_9043_460x460.jpg",
              "wr_todays" : "false",
              "wr_datetime":"2019-12-20 17:15:38"
            },
            {
              "wr_id":"10",
              "bo_table":"",
              "wr_subject":"\ud504\ub9b0\ud2f0\uc2a4 \ub274\uc2a4 \ud14c\uc2a4\ud2b82",
              "wr_img":"http://printis.co.kr/gnu/data/editor/1912/thumb-2ec3e6885f3fdbc4edc7db923ba6eaba_1577344925_9043_460x460.jpg",
              "wr_todays" : "false",
              "wr_datetime":"2019-12-20 17:15:38"
            },
            {
              "wr_id":"12",
              "bo_table":"",
              "wr_subject":"\ud504\ub9b0\ud2f0\uc2a4 \ub274\uc2a4 \ud14c\uc2a4\ud2b82",
              "wr_img":"http://printis.co.kr/gnu/data/editor/1912/thumb-2ec3e6885f3fdbc4edc7db923ba6eaba_1577344925_9043_460x460.jpg",
              "wr_todays" : "false",
              "wr_datetime":"2019-12-20 17:15:38"
            },
            {
              "wr_id":"14",
              "bo_table":"",
              "wr_subject":"\ud504\ub9b0\ud2f0\uc2a4 \ub274\uc2a4 \ud14c\uc2a4\ud2b82",
              "wr_img":"http://printis.co.kr/gnu/data/editor/1912/thumb-2ec3e6885f3fdbc4edc7db923ba6eaba_1577344925_9043_460x460.jpg",
              "wr_todays" : "false",
              "wr_datetime":"2019-12-20 17:15:38"
            },
            {
              "wr_id":"16",
              "bo_table":"",
              "wr_subject":"\ud504\ub9b0\ud2f0\uc2a4 \ub274\uc2a4 \ud14c\uc2a4\ud2b82",
              "wr_img":"http://printis.co.kr/gnu/data/editor/1912/thumb-2ec3e6885f3fdbc4edc7db923ba6eaba_1577344925_9043_460x460.jpg",
              "wr_todays" : "false",
              "wr_datetime":"2019-12-20 17:15:38"
            },
            {
              "wr_id":"18",
              "bo_table":"",
              "wr_subject":"\ud504\ub9b0\ud2f0\uc2a4 \ub274\uc2a4 \ud14c\uc2a4\ud2b82",
              "wr_img":"http://printis.co.kr/gnu/data/editor/1912/thumb-2ec3e6885f3fdbc4edc7db923ba6eaba_1577344925_9043_460x460.jpg",
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
        "wr_option":"\uad6c\ub3d9\ubc29\uc2dd|\uc6a9\uae30\ud615\ud0dc|\ucd5c\ub300 \uc6a9\uae30 \ub192\uc774|\ucd5c\ub300 \uc6a9\uae30 \ud3ed|\ucd5c\ub300 \ub77c\ubca8 \ud3ed|TACT TIME|\uae30\ubcf8 \uacf5\uae09 \uc0ac\ud56d|\uacf5\uae30 \uc18c\ubaa8\ub7c9|\uc804\uc6d0|MAIN AIR\ubc30\uad00|\uae30\uacc4\ud06c\uae30|\uae30\uacc4\uc911\ub7c9",
        "wr_id":"5",
        "wr_subject":"뉴스테스트 날짜출력뉴스테스트 날짜출력뉴스테스트 날짜출력뉴스테스트 날짜출력뉴스테스트 날짜출력",
        "wr_datetime":"2019-12-20 17:15:38",
        "wr_name":"\ucd5c\uace0\uad00\ub9ac\uc790",
        "wr_hit":"1",
        "wr_content":"<p><img src='http://dbrandtest.com/gnu/data/editor/1912/bebd60aac00ef3137b09b503878ad53c_1576547002_9791.png' ></p><p>\ub300\ud615\uc778\uc1c4\uae30 Series \ucca0\ud310\uc778\uc1c4\ub77c\uc778 \uc124\uba85</p>",
        "wr_option_text":"\uad6c\ub3d9\ubc29\uc2dd \ud14d\uc2a4\ud2b8|\uc6a9\uae30\ud615\ud0dc \ud14d\uc2a4\ud2b8|\ucd5c\ub300 \uc6a9\uae30 \ub192\uc774 \ud14d\uc2a4\ud2b8|\uc6a9\uae30\ud3ed \ud14d\uc2a4\ud2b8|\ub77c\ubca8\ud3ed \ud14d\uc2a4\ud2b8|\ud0c0\uc784 \ud14d\uc2a4\ud2b8|\uacf5\uae09\uc0ac\ud56d \ud14d\uc2a4\ud2b8|\uc18c\ubaa8\ub7c9 \ud14d\uc2a4\ud2b8|\uc804\uc6d0 \ud14d\uc2a4\ud2b8|\ubc30\uad00 \ud14d\uc2a4\ud2b8|\ud06c\uae30 \ud14d\uc2a4\ud2b8|\uc911\ub7c9 \ud14d\uc2a4\ud2b8",
        "wr_youtube":"Msoofktv66w",
        "next_wr_id":"62",
        "prev_wr_id":"64"
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