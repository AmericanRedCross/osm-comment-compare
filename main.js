
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

function compare(){
  d3.selectAll('.totals').classed('winner', false);

  if(parseInt($('#totalContributors1').text()) > parseInt($('#totalContributors2').text())){
    $('#totalContributors1').addClass('winner');
  } else if (parseInt($('#totalContributors1').text()) < parseInt($('#totalContributors2').text())){
    $('#totalContributors2').addClass('winner');
  }

  if(parseInt($('#totalEdits1').text()) > parseInt($('#totalEdits2').text())){
    $('#totalEdits1').addClass('winner');
  } else if (parseInt($('#totalEdits1').text()) < parseInt($('#totalEdits2').text())){
    $('#totalEdits2').addClass('winner');
  }

  if(parseInt($('#totalResults1').text()) > parseInt($('#totalResults2').text())){
    $('#totalResults1').addClass('winner');
  } else if (parseInt($('#totalResults1').text()) < parseInt($('#totalResults2').text())){
    $('#totalResults2').addClass('winner');
  }


}

$(document).ready(function(){
  $('#searchModal').modal();
});
