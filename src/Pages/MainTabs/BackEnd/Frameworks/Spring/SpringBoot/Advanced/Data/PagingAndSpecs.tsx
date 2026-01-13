import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PagingAndSpecs = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Spring/SpringBoot/Advanced/Data/PagingAndSpecs';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Paging & Specs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PagingAndSpecs;
