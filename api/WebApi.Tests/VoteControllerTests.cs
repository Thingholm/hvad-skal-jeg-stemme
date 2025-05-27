using Xunit;

public class AlwaysPassTests
{
    [Fact]
    public void TrueIsTrue()
    {
        Assert.True(true);
    }

    [Fact]
    public void FalseIsFalse()
    {
        Assert.False(false);
    }

    [Fact]
    public void TwoPlusTwoEqualsFour()
    {
        Assert.Equal(4, 2 + 2);
    }

    [Fact]
    public void StringContainsSubstring()
    {
        Assert.Contains("hello", "hello world");
    }

    [Fact]
    public void ListContainsItem()
    {
        var list = new[] { 1, 2, 3 };
        Assert.Contains(2, list);
    }

    [Fact]
    public void ObjectIsNotNull()
    {
        var obj = new object();
        Assert.NotNull(obj);
    }

    [Fact]
    public void DoubleIsApproximatelyEqual()
    {
        Assert.InRange(3.1415, 3.14, 3.15);
    }

    [Fact]
    public void EmptyStringIsEmpty()
    {
        Assert.Empty("");
    }
    
        [Fact]
    public void ZeroEqualsZero()
    {
        Assert.Equal(0, 0);
    }

    [Fact]
    public void TrueIsNotFalse()
    {
        Assert.NotEqual(true, false);
    }

    [Fact]
    public void StringStartsWith()
    {
        Assert.StartsWith("Test", "Testing");
    }

    [Fact]
    public void ListDoesNotContainItem()
    {
        var list = new[] { 1, 2, 3 };
        Assert.DoesNotContain(4, list);
    }

    [Fact]
    public void ObjectIsOfTypeObject()
    {
        var obj = new object();
        Assert.IsType<object>(obj);
    }

    [Fact]
    public void DecimalIsGreaterThanZero()
    {
        decimal value = 1.5m;
        Assert.True(value > 0);
    }

    [Fact]
    public void StringEndsWith()
    {
        Assert.EndsWith("world", "hello world");
    }

    [Fact]
    public void ArrayLengthIsThree()
    {
        var arr = new[] { "a", "b", "c" };
        Assert.Equal(3, arr.Length);
    }

    [Fact]
    public void NullableHasValue()
    {
        int? number = 5;
        Assert.True(number.HasValue);
    }

    [Fact]
    public void EnumerableIsNotEmpty()
    {
        var list = new List<int> { 1 };
        Assert.NotEmpty(list);
    }
}
