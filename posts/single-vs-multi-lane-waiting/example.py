import heapq
import math
import random


def simulate_queues(
    total_lambda: float,
    mu: float,
    c: int,
    n_customers: int = 200_000,
    seed: int = 42,
):
    random.seed(seed)

    # -------------------------------------------------------------
    # 1. Pre-generate inter-arrival times and service times
    # -------------------------------------------------------------
    # Cumulative arrival times A_i
    arrivals = []
    t = 0.0
    for _ in range(n_customers):
        t += random.expovariate(total_lambda)
        arrivals.append(t)

    service_times = [random.expovariate(mu) for _ in range(n_customers)]

    # -------------------------------------------------------------
    # 2. Single-Line Queue (M/M/c) using a Min-Heap
    # -------------------------------------------------------------
    # Min-heap stores the exact timestamp when each server becomes free
    servers_free_at = [0.0] * c
    heapq.heapify(servers_free_at)

    mmc_waits = []
    for arr_time, serv_time in zip(arrivals, service_times):
        # The next available server is the one that finishes earliest
        earliest_free = heapq.heappop(servers_free_at)

        # Start time is either when customer arrived or when server became free
        start_time = max(arr_time, earliest_free)
        mmc_waits.append(start_time - arr_time)

        # Push updated free time back into the heap
        heapq.heappush(servers_free_at, start_time + serv_time)

    # -------------------------------------------------------------
    # 3. Multi-Line Queues (c x M/M/1)
    # -------------------------------------------------------------
    # Each server has its own dedicated line free time
    line_free_at = [0.0] * c
    mm1_waits = []

    for arr_time, serv_time in zip(arrivals, service_times):
        # Customer picks a random line upon arrival
        chosen_line = random.randint(0, c - 1)

        start_time = max(arr_time, line_free_at[chosen_line])
        mm1_waits.append(start_time - arr_time)

        line_free_at[chosen_line] = start_time + serv_time

    # -------------------------------------------------------------
    # 4. Results & Comparison
    # -------------------------------------------------------------
    avg_mmc = sum(mmc_waits) / n_customers
    avg_mm1 = sum(mm1_waits) / n_customers

    print(f"--- Simulation Results ({c} Servers) ---")
    print(f"Single-Line (M/M/{c}) Wait : {avg_mmc:.4f} min")
    print(f"Multi-Line  ({c}xM/M/1) Wait: {avg_mm1:.4f} min")
    print(f"Wait Time Reduction        : {(1 - avg_mmc / avg_mm1) * 100:.2f}%")


if __name__ == "__main__":
    simulate_queues(total_lambda=1.6, mu=1.0, c=2)