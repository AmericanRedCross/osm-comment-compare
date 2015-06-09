
var formatCommas = d3.format(",");

function getNumbers(){

  d3.select('#totalContributors1').html('<img src="ellipsis-small.gif">');
  d3.select('#totalEdits1').html('<img src="ellipsis-small.gif">');
  d3.select('#totalResults1').html('<img src="ellipsis-small.gif">');
  d3.select('#totalContributors2').html('<img src="ellipsis-small.gif">');
  d3.select('#totalEdits2').html('<img src="ellipsis-small.gif">');
  d3.select('#totalResults2').html('<img src="ellipsis-small.gif">');

  $('#search1').html($('#searchstring1').val());
  $('#search2').html($('#searchstring2').val());
  var url1 = "https://api.developmentseed.org/osm?search=comment:" + $('#searchstring1').val();
  var url2 = "https://api.developmentseed.org/osm?search=comment:" + $('#searchstring2').val();
  d3.json(url1, function(object){
    d3.select('#totalContributors1').text(formatCommas(object.meta.total_contributors));
    d3.select('#totalEdits1').text(formatCommas(object.meta.total_edits));
    d3.select('#totalResults1').text(formatCommas(object.meta.total_results));
    d3.json(url2, function(object){
      d3.select('#totalContributors2').text(formatCommas(object.meta.total_contributors));
      d3.select('#totalEdits2').text(formatCommas(object.meta.total_edits));
      d3.select('#totalResults2').text(formatCommas(object.meta.total_results));
      compare();
    });
  });

}

function readNumber(span){
  var str = span.text().replace(/,/g, "");
  return parseInt(str);
}

function compare(){
  d3.selectAll('.totals').classed('winner', false);

  if(readNumber($('#totalContributors1')) > readNumber($('#totalContributors2'))){
    $('#totalContributors1').addClass('winner');
  } else if (readNumber($('#totalContributors1')) < readNumber($('#totalContributors2'))){
    $('#totalContributors2').addClass('winner');
  }

  if(readNumber($('#totalEdits1')) > readNumber($('#totalEdits2'))){
    $('#totalEdits1').addClass('winner');
  } else if (readNumber($('#totalEdits1')) < readNumber($('#totalEdits2'))){
    $('#totalEdits2').addClass('winner');
  }

  if(readNumber($('#totalResults1')) > readNumber($('#totalResults2'))){
    $('#totalResults1').addClass('winner');
  } else if (readNumber($('#totalResults1')) < readNumber($('#totalResults2'))){
    $('#totalResults2').addClass('winner');
  }


}

$(document).ready(function(){
  $('#searchModal').modal();
});
