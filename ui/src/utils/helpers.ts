interface Payload {
    resource: string
    type?: string
    function: string
    args: object
}

export const invoke = function(payload:Payload) {
    return fetch(`https://${location.host}/invoke`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        resource: payload.resource,
        function: payload.function,
        args: payload.args,
      }),
    })
      .then(r => r.json())
      .then(responce => {
        if (responce.ok) {
          return responce.result;
        } else {
          throw responce.result;
        }
      });
  };
  
  export const invokeJson = function(payload:Payload) {
    return fetch(`https://${location.host}/invoke`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        resource: payload.resource,
        function: payload.function,
        args: payload.args,
      }),
    })
      .then(r => r.json())
      .then(responce => {
        if (responce.ok) {
          return responce.json();
        } else {
          throw responce.result;
        }
      });
  };
  
  export const trigger = function(payload:Payload) {
    return fetch(`https://${location.host}/trigger`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: payload.type,
        function: payload.function,
        args: payload.args,
      }),
    })
      .then(r => r.json())
      .then(responce => {
        if (responce.ok) {
          return responce.result;
        } else {
          throw responce.result;
        }
      });
  };