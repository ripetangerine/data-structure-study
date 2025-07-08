// 다 어렵다 어려운 걸 전제 조건을 깔 고 간 다
// 어렵다고 안하는 건 패배자 성격임 그게 경쟁력이라고

/**
 * 1. 한번에 하나의 원반
 * 2. 가장 위에 있는 원반
 * 3. 아래에 작은 원반이 올 수 없다.
 */

function hanoi(count, from, to, temp){
    if(count == 0) return;

    hanoi(count-1, from, temp, to);
    console.log(`원반 : ${count} ${from} ==> ${to}`);
    hanoi(count-1, temp, from, to);
}

hanoi(3, "A", "C", "B");