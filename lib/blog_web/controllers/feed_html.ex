defmodule BlogWeb.FeedHTML do
  use BlogWeb, :html

  embed_templates "feed_xml/*"

  def pub_date(nil) do
    {:ok, datetime } = DateTime.now("America/New_York")
    Calendar.strftime(datetime, "%a, %d %b %Y %H:%M:%S %Z")
  end
end
