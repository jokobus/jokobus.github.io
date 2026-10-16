import torch
import numpy as np

# Initialize a Tensor
## Directly from data
data = [[1,2], [3,4]]
x_data = torch.tensor(data)
print(f"From Data: \n{x_data} \n")
## From another NumPy Array
np_array = np.array(data)
x_np = torch.from_numpy(np_array)
print(f"From NumPy: \n{x_np} \n")
## From another tensor
x_ones = torch.ones_like(x_data)
print(f"Ones Tensor: \n{x_ones} \n")
x_rand = torch.rand_like(x_data, dtype=torch.float)
print(f"Random Tensor: \n{x_rand} \n")
## Create tensor with specific shape
shape = (2,3,)
rand_tensor = torch.rand(shape)
ones_tensor = torch.ones(shape)
zeros_tensor = torch.zeros(shape)
print(f"Random 2x3 Tensor: \n{rand_tensor} \n")
print(f"Ones 2x3 Tensor: \n{ones_tensor} \n")
print(f"Zeros 2x3 Tensor: \n{zeros_tensor}")
## Print attributes of the tensor
print(f"Shape of Random 2x3 Tensor: \n{rand_tensor.shape} \n")
print(f"Datatype of Random 2x3 Tensor: \n{rand_tensor.dtype} \n")
print(f"Device Random 2x3 Tensor is stored on: \n{rand_tensor.device}")

# Move the current tensor to an accelerator
# Wait for later torch versions
# if torch.accelerator.is_available():
#    tesor = rand_tensor.to(torch.accelerator.current_accelerator())
# For now stick to
device = 'cuda' if torch.cuda.is_available() else 'cpu'
rand_tensor.to(device)