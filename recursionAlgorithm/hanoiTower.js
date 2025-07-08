// 다 어렵다 어려운 걸 전제 조건을 깔 고 간 다
// 어렵다고 안하는 건 패배자 성격임 그게 경쟁력이라고

/**
 * 하노이의 탑 규칙
 * 1. 한번에 하나의 원반
 * 2. 가장 위에 있는 원반
 * 3. 아래에 작은 원반이 올 수 없다.
 */


// 숫자, 출발점, 도착점, 횡단점
function hanoi(count, from, to, temp){
    if(count == 0) return;

    hanoi(count-1, from, temp, to); 
    // console.log(`원반 : ${count} ${from} ==> ${to}`);
    hanoi(count-1, temp, to, from)

}


// 숫자, 출발점, 도착점, 횡단점
function hanoi2(num, from, to, via){
    if(num == 0) return;
    hanoi(num-1, from, via, to);
    // console.log(`${from}번에서 ${to}로 옮김`)
    hanoi(num-1, via, to, from);
}

hanoi(3, "A", "C", "B");