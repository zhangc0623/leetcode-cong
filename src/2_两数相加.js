function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
 * @param l1
 * @param l2
 * @returns {null}
 */
 function addTwoNumbers(l1, l2) {
    let p1 = l1, p2 = l2
    let up = 0
    let re = null
    let p3 = null
    while (p1 || p2) {
        let n1 = p1 ? p1.val : 0
        let n2 = p2 ? p2.val : 0
        let sum = (n1  + n2) + up
        up = Math.floor(sum / 10)
        sum = sum % 10
        if (!re) {
            re = new ListNode(sum, null)
            p3 = re
        } else {
            p3.next = new ListNode(sum, null)
            p3 = p3.next
        }
        if (p1) {
            p1 = p1.next
        }
        if (p2) {
            p2 = p2.next
        }
    }
    if (up > 0) {
        p3.next = new ListNode(up, null)
    }
    return re
}

console.log(addTwoNumbers(new ListNode(2, new ListNode(4, new ListNode(3))), new ListNode(5, new ListNode(6, new ListNode(4)))))
