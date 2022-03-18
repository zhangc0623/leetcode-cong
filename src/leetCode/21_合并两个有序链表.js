function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 * @param list1
 * @param list2
 * @returns {*}
 */
function mergeTwoLists(list1, list2) {
    if (!list1) {
        return list2
    } else if (!list2) {
        return list1
    } else if (list1.val <= list2.val) {
        list1.next = mergeTwoLists(list1.next, list2)
        return list1
    } else {
        list2.next = mergeTwoLists(list1, list2.next)
        return list2
    }
}

console.log(mergeTwoLists(new ListNode(1, new ListNode(2, new ListNode(4))), new ListNode(1, new ListNode(3, new ListNode(4)))))
