$(function ()
{
	$("#loadURL").click(function ()
	{
		url = $("#todoTextField").val()
		getToDoJSON(url);
	})
});
function getToDoJSON(url)
{
	return $.getJSON(url,null,layoutToDoList)
}
function layoutToDoList(data)
{
	items = data.items;
	display = $("#display");
	display.html("");
	for (i = 0; i < data.items.length; i++)
	{
		item = items[i];
		div = $("<div>");
		if (item.done)
		{
			div.addClass("done");
		}
		div.text(item.description);
		display.append(div);
	}
}