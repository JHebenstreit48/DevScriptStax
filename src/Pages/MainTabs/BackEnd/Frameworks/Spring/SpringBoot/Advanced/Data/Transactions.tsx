import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Transactions = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Spring/SpringBoot/Advanced/Data/Transactions';

  return (
    <>
      <PageLayout>
        <PageTitle title="Transactions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Transactions;
