import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Fundamentals = () => {
  const markdownFilePath = 'BackEnd/APIs/Advanced/Gateways/Fundamentals';

  return (
    <>
      <PageLayout>
        <PageTitle title="Gateways: Fundamentals" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Fundamentals;
