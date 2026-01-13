import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Scheduling = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Spring/SpringBoot/Advanced/AsyncAndScheduling/Scheduling';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Scheduling" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Scheduling;
