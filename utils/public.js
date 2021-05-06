export const initFn = (self, callback, ...args) => {
  if (window.hasInit) callback.apply(self, [...args])
  else {
    window.hccms.init.auth(
      {
        deptid: 0,
        activityid: 0,
        scenetype: 1,
        actiontype: 0
      },
      function(e) {
        window.hasInit = true
        callback.apply(self, [...args])
      }
    )
  }
}