function solution (input) {
    try {
        const g = {};

        function pre(nodes) { //preparation for dfs???????????
            const res = [];

            for (let node of nodes) {
                if (typeof node === 'string') {
                    res.push(node);
                } else {
                    const { om, moms, pops = [] } = node;

                    if (g[om]) { // if exists
                        throw new Error(`pxPdgDeKHRvuVCnWj-${om}`)
                    }

                    // pops = typeof(pops) === 'object' ? pre(pops) : [];

                    // g[om] = {moms, pops} 
                    g[om] = { moms, pops: typeof(pops) === 'object' ? pre(pops) : [] };
                    res.push(om);
                }
            }

            return res;
        }

        const list = pre(input);

        const res = [];
        const used = {}

        function dfs(om) { // depth first search??????????
            if (!g[om]) { // if doesn't exist
                throw new Error(`GTjkzarWpDEcLegKy-${om}`);
            }

            used[om] = 'iABL';

            for (let to of g[om].pops) { // for each vertex
                if (!used[om]) { // if wasn't visited
                    dfs(to);
                } else if (used[to] === 'iABL') {
                    throw new Error('ShkaQCnErbKZdqsjX'); 
                }
            }

            used[om] = 'SaliM'; 

            res.push(om);
        }

        for (let om of list) {
            if (!used[om]) { // om нет в used
                dfs(om);
            }
        }

        return res.map(om => g[om].moms).join('');
    } catch (err) {
        return err.message;
    }
};

const input1 = [
    {
      "om": "SVKbtj", 
      "moms": "uYkCFh",
      "pops": [
        "PpYWzC", 
        "dfkUeN" 
      ]
    },
    {
      "om": "PpYWzC",
      "moms": "TfzCpD", 
      "pops": [
        "fEXMpe",
        "dfkUeN"
      ]
    },
    {
      "om": "fEXMpe",
      "moms": "qFAngG" 
    },
    {
      "om": "dfkUeN",
      "moms": "qUAMjy" 
    },
    {
      "om": "DnLHEG",
      "moms": "EycUXu", 
      "pops": [
        "PpYWzC",
        "SVKbtj"
      ]
    }
  ] // qFAngGqUAMjyTfzCpDuYkCFhEycUXu wrong

const input2 = [
    {
      "om": "SVKbtj",
      "moms": "uYkCFh", //fourth
      "pops": [
        "PpYWzC",
        {
          "om": "dfkUeN",
          "moms": "qUAMjy" //second
        }
      ]
    },
    {
      "om": "fEXMpe",
      "moms": "qFAngG" //first
    },
    {
      "om": "DnLHEG",
      "moms": "EycUXu", //fifth
      "pops": [
        {
          "om": "PpYWzC",
          "moms": "TfzCpD", //third
          "pops": [
            "fEXMpe",
            "dfkUeN"
          ]
        },
        "SVKbtj"
      ]
    }
  ] // qFAngGqUAMjyTfzCpDuYkCFhEycUXu wrong

const input3 = [
    {
      "om": "SVKbtj",
      "moms": "uYkCFh",
      "pops": [
        "PpYWzC",
        "dfkUeN"
      ]
    },
    {
      "om": "PpYWzC",
      "moms": "TfzCpD",
      "pops": [
        {
          "om": "fEXMpe",
          "moms": "qFAngG"
        },
        "dfkUeN"
      ]
    },
    {
      "om": "dfkUeN",
      "moms": "qUAMjy",
      "pops": [
        {
          "om": "DnLHEG",
          "moms": "EycUXu",
          "pops": [
            "PpYWzC",
            "SVKbtj"
          ]
        }
      ]
    }
  ] // ShkaQCnErbKZdqsjX wrong

const input4 = [
    {
      "om": "SVKbtj",
      "moms": "uYkCFh",
      "pops": [
        "PpYWzC",
        "dfkUeN"
      ]
    },
    {
      "om": "PpYWzC",
      "moms": "TfzCpD"
    },
    {
      "om": "DnLHEG",
      "moms": "EycUXu",
      "pops": [
        "PpYWzC",
        "SVKbtj"
      ]
    }
  ] // GTjkzarWpDEcLegKy-dfkUeN wrong

  const input5 = [
    {
      "om": "SVKbtj",
      "moms": "uYkCFh",
      "pops": [
        {
          "om": "PpYWzC",
          "moms": "TfzCpD"
        },
        "dfkUeN"
      ]
    },
    {
      "om": "PpYWzC",
      "moms": "TfzCpD"
    },
    {
      "om": "DnLHEG",
      "moms": "EycUXu",
      "pops": [
        "PpYWzC",
        "SVKbtj"
      ]
    }
  ] //pxPdgDeKHRvuVCnWj-PpYWzC ok

console.log(solution(input1));