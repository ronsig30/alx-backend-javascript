def pascal_triangle(n):
    """
    Generate Pascal's Triangle up to n rows.

    Parameters:
    n (int): The number of rows in Pascal's Triangle.

    Returns:
    list: A list of lists containing integers representing Pascal's Triangle.
    """
    # Return an empty list if n is less than or equal to 0
    if n <= 0:
        return []

    # Initialize the triangle with the first row
    triangle = [[1]]

    # Generate each row of Pascal's Triangle
    for i in range(1, n):
        # Start each row with a '1'
        row = [1]

        # Compute the values for the row using the previous row
        previous_row = triangle[i - 1]
        for j in range(1, i):
            # Each element is the sum of the two elements above it
            row.append(previous_row[j - 1] + previous_row[j])

        # End each row with a '1'
        row.append(1)

        # Append the row to the triangle
        triangle.append(row)

    return triangle
