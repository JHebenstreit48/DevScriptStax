import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const PagingAndSpecs = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Spring/SpringBoot/Advanced/Data/PagingAndSpecs';

  return (
    <>
      <PageLayout>
        <PageTitle title="Paging & Specs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PagingAndSpecs;
