// import store from '@/store'

import store from "../store";

const getAdminIcon = (nodeList) => {
  let iconNode = null;
  //  console.log('nodeList', nodeList)

  for (let i = 0; i < nodeList.length; i++) {
    let item = nodeList[i];
    let bool = item.classList && item.classList.contains("mdi-alpha-a-circle");
    // console.log('item', item)
    // console.log('bool', bool)
    if (bool) {
      iconNode = item;
      break;
    }
    if (item.childNodes.length === 0) {
      continue;
    }
    iconNode = getAdminIcon(item.childNodes);
    if (iconNode) {
      return iconNode;
    }
  }
  return iconNode;
};
// 按钮权限
// v-has:search
const has = {
  inserted(el, binding, vnode) {
    let isForceDel = false;
    // 第一种实现方式
    let trNodes = el.parentNode.parentNode.childNodes;
    if (trNodes) {
      const iconEle = getAdminIcon(trNodes);
      if (iconEle) {
        console.log(iconEle); // 管理员创建的数据
        let roleId = store.state.userInfo.roleId;
        isForceDel = roleId !== "admin";
      }
    }

    // 第二种实现方式
    // if (binding.value) {
    //   let record = binding.value
    //   let isAdmin = store.state.userIdByAdminList.includes(
    //     record.createUser,
    //   )
    //   let userId = store.state.userInfo.userId

    //   if (isAdmin) {
    //     isForceDel = !store.state.userIdByAdminList.includes(userId)
    //   }
    // }

    const value = binding.arg || binding.value || binding.value.arg;

    const permissions = vnode.context.$route.meta.buttons || [];

    if (value) {
      if (!permissions.includes(value) || isForceDel) {
        (el.parentNode && el.parentNode.removeChild(el)) ||
          (el.style.display = "none");
      }
    }
  }
};

export { has };
